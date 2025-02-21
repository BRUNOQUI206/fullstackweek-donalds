import { db } from "@/lib/prisma";

import ProductDetails from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      restaurant: {
        select: {
          avatarImageUrl: true,
          name: true,
          slug: true,
        },
      },
    },
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  if (product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return {
      notFound: true,
    };
  }

  return (
    <div className="flex h-full flex-col">
      <ProductHeader product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
