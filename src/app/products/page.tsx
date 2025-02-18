import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="border border-red-500 rounded-xl p-5">
      <h1 className="text-red-500">Product Page</h1>
      <Button>FSW 7.0</Button>
      <Input placeholder="Bora fechar esse projeto!"></Input>
    </div>
  );
};

export default ProductPage;
