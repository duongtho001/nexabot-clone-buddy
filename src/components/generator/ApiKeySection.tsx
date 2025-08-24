import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ApiKeySectionProps {
  apiKey: string;
  onApiKeyChange: (value: string) => void;
}

export function ApiKeySection({ apiKey, onApiKeyChange }: ApiKeySectionProps) {
  return (
    <Card className="glass-effect border-white/10 p-6">
      <Label htmlFor="api-key" className="text-lg font-semibold mb-4 block">
        API Key
      </Label>
      <Input
        id="api-key"
        type="password"
        placeholder="Required for AI generation"
        value={apiKey}
        onChange={(e) => onApiKeyChange(e.target.value)}
        className="bg-background/50"
      />
      <p className="text-xs text-muted-foreground mt-2">
        Your API key is stored locally and never shared
      </p>
    </Card>
  );
}