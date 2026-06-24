import { toast } from "@/hooks/use-toast";
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductInfoSec from "@/components/admin/products/ProductInfoSec";
import ProductAddImageSec from "@/components/admin/products/ProductAddImageSec";
import ProductInventoryControlSec from "@/components/admin/products/ProductInventoryControlSec";
import ProductAdditionalDetailsSec from "@/components/admin/products/ProductAdditionalDetailsSec";
import { ArrowLeft } from "lucide-react";
import PrimaryButton from "../../customButtons/PrimaryButton";

const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductForm = ({
  initialData = {},
  onSubmit,
  loading,
  buttonText = "Save Product",
}) => {
  const navigate = useNavigate();

  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [productInfo, setProductInfo] = useState(
    initialData.productInfo || [""],
  );
  const [category, setCategory] = useState(initialData.category || "");
  const [gender, setGender] = useState(initialData.gender || "");
  const [images, setImages] = useState(initialData.images || [""]);
  const [isFeatured, setIsFeatured] = useState(initialData.isFeatured || false);
  const [sizes, setSizes] = useState(
    initialData.sizes ||
      sizeOptions.map((size) => ({
        size,
        stock: "",
      })),
  );

  const handleImageChange = (index, value) => {
    const updated = [...images];
    updated[index] = value;
    setImages(updated);
  };

  const addImageField = () => {
    const cleanedImages = images
      .map((img) => img.trim())
      .filter((img) => img !== "");

    if (cleanedImages.length === 0) {
      toast({
        variant: "destructive",
        description: "Please add an image first",
      });

      return;
    }

    const validImages = cleanedImages.every((img) => {
      try {
        new URL(img);
        return true;
      } catch {
        return false;
      }
    });

    if (!validImages) {
      toast({
        variant: "destructive",
        description: "Please enter valid image URLs",
      });

      return;
    }

    if (images.some((img) => img.trim() === "")) {
      toast({
        variant: "destructive",
        description: "Please complete the current image field first",
      });

      return;
    }

    setImages([...images, ""]);

    toast({
      description: "Image added",
    });
  };

  const removeImageField = (index) => {
    if (images.length === 1) {
      setImages([""]);
      return;
    }

    const updated = images.filter((_, i) => i !== index);

    setImages(updated);
  };

  const handleInfoChange = (index, value) => {
    const updated = [...productInfo];
    updated[index] = value;
    setProductInfo(updated);
  };

  const addInfoField = () => {
    if (productInfo.some((info) => info.trim() === "")) {
      toast({
        variant: "destructive",
        description: "Please complete the current detail field first",
      });

      return;
    }

    setProductInfo([...productInfo, ""]);
  };

  const removeInfoField = (index) => {
    if (productInfo.length === 1) {
      setProductInfo([""]);
      return;
    }

    const updated = productInfo.filter((_, i) => i !== index);

    setProductInfo(updated);
  };

  const handleStockChange = (sizeName, stock) => {
    const updated = sizes.map((item) =>
      item.size === sizeName
        ? {
            ...item,
            stock,
          }
        : item,
    );

    setSizes(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    const numericPrice = Number(price);

    const cleanedImages = images.map((img) => img.trim()).filter(Boolean);

    const cleanedInfo = [];
    const seen = new Set();

    productInfo.forEach((info) => {
      const trimmed = info.trim();

      if (!trimmed) return;

      const normalized = trimmed.toLowerCase();

      if (!seen.has(normalized)) {
        seen.add(normalized);
        cleanedInfo.push(trimmed);
      }
    });

    const cleanedSizes = sizes
      .map((item) => ({
        ...item,
        stock: Number(item.stock || 0),
      }))
      .filter((item) => item.stock > 0);

    const hasValidImages = cleanedImages.every((img) => {
      try {
        new URL(img);
        return true;
      } catch {
        return false;
      }
    });

    const isInvalid =
      trimmedName.length < 2 ||
      Number.isNaN(numericPrice) ||
      numericPrice <= 0 ||
      trimmedDescription.length < 10 ||
      !category ||
      !gender ||
      cleanedImages.length === 0 ||
      !hasValidImages ||
      cleanedInfo.length === 0 ||
      cleanedSizes.length === 0;

    if (isInvalid) {
      toast({
        variant: "destructive",
        description: "Please fill in all required fields properly",
      });

      return;
    }

    onSubmit({
      name: trimmedName,
      price: numericPrice,
      description: trimmedDescription,
      productInfo: cleanedInfo,
      category,
      gender,
      images: cleanedImages,
      sizes: cleanedSizes,
      isFeatured,
    });
  };

  return (
    <div className="animate-fadeIn">
      <button
        onClick={() => navigate(-1)}
        className="
            inline-flex
            items-center
            gap-2
            text-[13px]
            font-medium
            text-black/70
            active:scale-[0.985]    
            transition-colors
            duration-150     
            hover-supported:group-hover:text-black
            mb-3
          "
      >
        <ArrowLeft size={13} />
        Back
      </button>
      <form onSubmit={handleSubmit} className="space-y-8 ">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div
              className="
        h-[6px]
        w-[6px]
        rounded-full
        bg-black/80"
            />

            <p
              className="
        text-[10px]
        font-medium
        tracking-[0.18em]
        uppercase
        text-black/35
        "
            >
              Product Editor
            </p>
          </div>

          <div className="space-y-3">
            <h1
              className="
        text-[34px]
        leading-none
        font-semibold
        tracking-[-0.06em]
        text-black/90"
            >
              {initialData?._id ? "Edit Product" : "Add Product"}
            </h1>

            <p
              className="
        max-w-[520px]
        text-[13px]
        leading-relaxed
        text-black/45"
            >
              Manage product information, inventory and storefront visibility
            </p>
          </div>
        </div>
        <ProductInfoSec
          name={name}
          setName={setName}
          category={category}
          setCategory={setCategory}
          gender={gender}
          setGender={setGender}
          price={price}
          setPrice={setPrice}
          description={description}
          setDescription={setDescription}
        />

        <ProductAddImageSec
          images={images}
          handleImageChange={handleImageChange}
          addImageField={addImageField}
          removeImageField={removeImageField}
        />
        <ProductInventoryControlSec
          sizes={sizes}
          handleStockChange={handleStockChange}
        />
        <ProductAdditionalDetailsSec
          productInfo={productInfo}
          handleInfoChange={handleInfoChange}
          addInfoField={addInfoField}
          removeInfoField={removeInfoField}
        />

        <div
          className="
    relative
    overflow-hidden
    rounded-[30px]
    border border-black/[0.045]
    bg-white/[0.78]
    backdrop-blur-xl
    p-7
    shadow-[0_10px_30px_rgba(0,0,0,0.03)]
    transition-all duration-300
    flex items-center justify-between gap-6
  "
        >
          <div className="space-y-1">
            <p
              className="
        text-[14px]
        font-medium
        tracking-[-0.01em]
        text-black/85
      "
            >
              Featured Product
            </p>

            <p
              className="
        text-[12px]
        leading-relaxed
        text-black/35
      "
            >
              Display this product prominently across the storefront
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsFeatured(!isFeatured)}
            className={`
      relative
      h-8
      w-14
      shrink-0
      rounded-full
      border
      transition-all duration-150 ease-out
      ${
        isFeatured
          ? "border-black/[0.08] bg-black/[0.92]"
          : "border-black/[0.05] bg-black/[0.06]"
      }
      active:scale-[0.96]
    `}
          >
            <div
              className={`
        absolute top-1 left-1
        h-6
        w-6
        rounded-full
        bg-white
        shadow-[0_2px_10px_rgba(0,0,0,0.08)]
        transition-all duration-150 ease-out
        ${isFeatured ? "translate-x-6" : "translate-x-0"}
      `}
            />
          </button>
        </div>

        <div className="flex justify-stretch sm:justify-end">
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Saving..." : buttonText}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default memo(ProductForm);
