import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "@/components/admin/products/ProductForm";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/api/apiSlice";
import { toast } from "@/hooks/use-toast";

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
    return <div className="p-8 text-gray-400 text-sm">Loading product...</div>;
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
