import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CustomForm = ({items, ...props}) => {
  return (
    <Form {...props} action={process.env.NEXT_PUBLIC_API_URL + endPoint} method="POST" >
      {items?.map((item) => (
        <Form.Group className="mb-3">
          <Form.Label>{item?.label}</Form.Label>
          <Form.Control
            type={item?.type}
            placeholder={item?.placeholder}
            required={item?.required ? 1 : 0}
          />
          <Form.Text className="text-muted">{item?.text}</Form.Text>
        </Form.Group>
      ))}
      <Button className="w-100" variant="outline-primary" type="submit">
        {textButton}
      </Button>
    </Form>
  );
};

export default CustomForm;