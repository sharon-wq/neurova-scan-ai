import { useState } from "react";
import { Upload, FileImage, Brain, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    
    // Simulate upload and analysis
    setTimeout(() => {
      toast({
        title: "Analysis Complete!",
        description: "Your MRI scan has been analyzed successfully.",
      });
      setUploading(false);
      setSelectedFile(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="glass border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-primary animate-glow-pulse" />
              <span className="text-2xl font-bold text-gradient">Neurova</span>
            </div>
            <Button variant="glass" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">
              Upload <span className="text-gradient">MRI Scan</span>
            </h1>
            <p className="text-muted-foreground">
              Upload your brain MRI scan to get instant AI-powered analysis
            </p>
          </div>

          <Card className="glass p-8">
            <div className="space-y-6">
              {/* Upload Area */}
              <div
                className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                <div className="flex flex-col items-center gap-4">
                  {selectedFile ? (
                    <>
                      <FileImage className="w-16 h-16 text-primary" />
                      <div>
                        <p className="text-foreground font-medium">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload className="w-16 h-16 text-muted-foreground" />
                      <div>
                        <p className="text-foreground font-medium">Click to upload or drag and drop</p>
                        <p className="text-sm text-muted-foreground">
                          PNG, JPG, DICOM up to 50MB
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  variant="hero"
                  className="flex-1"
                  onClick={handleUpload}
                  disabled={!selectedFile || uploading}
                >
                  {uploading ? (
                    <>
                      <Brain className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4" />
                      Analyze Scan
                    </>
                  )}
                </Button>
                {selectedFile && (
                  <Button
                    variant="glass"
                    onClick={() => setSelectedFile(null)}
                  >
                    Clear
                  </Button>
                )}
              </div>

              {/* Info */}
              <div className="glass p-4 rounded-lg space-y-2">
                <h3 className="font-semibold text-foreground">What to expect:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tumor type identification</li>
                  <li>• Volume and size analysis</li>
                  <li>• Stage detection</li>
                  <li>• Personalized treatment recommendations</li>
                  <li>• Results in approximately 2-3 minutes</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
