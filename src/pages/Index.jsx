import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProducts } from '../integrations/supabase/index.js';

const Index = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to MyApp</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a bare-bones application that you can modify and build upon.</p>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name} - ${product.price}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;