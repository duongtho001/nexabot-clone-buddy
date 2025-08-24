-- Create user_api_keys table to store encrypted API keys
CREATE TABLE public.user_api_keys (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('video', 'voice', 'image')),
  encrypted_key TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, service_type)
);

-- Enable RLS
ALTER TABLE public.user_api_keys ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own API keys" 
ON public.user_api_keys 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own API keys" 
ON public.user_api_keys 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own API keys" 
ON public.user_api_keys 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own API keys" 
ON public.user_api_keys 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create generation_requests table to track API calls
CREATE TABLE public.generation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('video', 'voice', 'image')),
  prompt TEXT NOT NULL,
  config JSONB,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  result_url TEXT,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public.generation_requests ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for generation_requests
CREATE POLICY "Users can view their own requests" 
ON public.generation_requests 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" 
ON public.generation_requests 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" 
ON public.generation_requests 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_user_api_keys_updated_at
  BEFORE UPDATE ON public.user_api_keys
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();