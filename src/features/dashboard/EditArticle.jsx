import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useEditArticle } from "./useEditArticle";
import Button from "../../ui/Button";

function EditArticle({ articleEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = articleEdit;

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { ...editValues },
  });

  const { errors } = formState;
  const { mutate: editArticle, isLoading: isEditing } = useEditArticle();

  function onSubmit(data) {
    editArticle(
      { newArticleData: data, id: editId },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    // Handle errors here if needed
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Title" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          default={articleEdit.title}
          disabled={isEditing}
          {...register("title")}
        />
      </FormRow>

      <FormRow label="Author" error={errors?.author?.message}>
        <Input
          type="text"
          id="author"
          disabled={isEditing}
          {...register("author")}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isEditing}>Edit Article</Button>
      </FormRow>
    </Form>
  );
}

export default EditArticle;
