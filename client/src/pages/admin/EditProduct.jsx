import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "@/features/admin/components/products/product-form/ProductForm";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/api/apiSlice";
import { toast } from "@/hooks/use-toast";
import ProductEditorSkeleton from "@/components/feedback/loading/ProductEditorSkeleton";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading } = useGetProductByIdQuery(id);

  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();

  const handleUpdate = async (formData) => {
    try {
      await updateProduct({
        id,
        data: formData,
      }).unwrap();

      toast({
        description: "Product updated",
      });

      navigate("/admin/products");
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Unable to edit product",
      });
    }
  };

  if (isLoading) {
    return <ProductEditorSkeleton />;
  }

  return (
    <ProductForm
      initialData={data?.product}
      onSubmit={handleUpdate}
      loading={updating}
      buttonText="Save Changes"
    />
  );
};

export default EditProduct;
