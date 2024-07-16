import { HiPencil } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import EditArticle from "./EditArticle";

function Article({ article }) {
  const { urlToImage, title, url, description, source } = article;

  return (
    <li>
      <div className="h-full  bg-white shadow-md rounded-md p-4 hover:shadow-lg relative hover:bg-gray-200  hover:cursor-pointer">
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-50% rounded-t-md"
        />
        <div className=" p-4 ">
          <h2 className=" font-bold text-lg mb-2">{title}</h2>
          <h3 className="text-sm text-gray-600 mb-4">
            <i>{source.name}</i>
          </h3>
          <p className="text-base">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline text-base mt-4"
          >
            Read more
          </a>
        </div>
        <Modal>
          <Modal.Open opens="edit">
            <HiPencil />
          </Modal.Open>
          <Modal.Window name="edit">
            <EditArticle articleEdit={article} />
          </Modal.Window>
        </Modal>
      </div>
    </li>
  );
}

export default Article;
