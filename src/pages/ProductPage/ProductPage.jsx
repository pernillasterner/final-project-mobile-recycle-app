import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import styles from "./ProductPage.module.scss";

/**
 * Use params to fetch the prodId
 * Fetch that product using supabase select
 * Update the product page with the new product
 * http://localhost:5174/product/8
 * 
 * 

 */

export const ProductPage = () => {
  return <div>ProductPage</div>;
};
