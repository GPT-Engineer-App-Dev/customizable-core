import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to MyApp</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a bare-bones application that you can modify and build upon.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;