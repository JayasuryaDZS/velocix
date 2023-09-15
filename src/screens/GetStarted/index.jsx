import { useEffect } from "react";
import Layout from "../Layout";
import { useSelector, useDispatch } from "react-redux";
import { GET_PRODUCT_BY_ID } from "../../store/actionTypes";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const GetStarted = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const params = useParams();

  console.log({ product });

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_BY_ID, payload: params.id });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Layout>
        <h1>Get started</h1>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={product?.attributes?.overview}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </Layout>
    </div>
  );
};

export default GetStarted;
