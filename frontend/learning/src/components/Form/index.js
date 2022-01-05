import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const CustomForm = ({items, endPoint=process.env.NEXT_PUBLIC_API_URL , ...props}) => {
  
  const [textButton, setTextButton ] = useState("Enviar");

  const postForm = event => event.preventDefault();
  
  return (
    <Form {...props} action={endPoint} method="POST" >
      {items?.map((item,index) => (
        <Form.Group key={index} className="mb-3">
          <Form.Label>{item?.label}</Form.Label>
          <Form.Control
            {...item}
          />
          <Form.Text className="text-muted">{item?.text}</Form.Text>
        </Form.Group>
      ))}
      <Button className="w-100" variant="outline-primary" type="submit" onClick={postForm}>
        {textButton}
      </Button>
    </Form>
  );
};

export default CustomForm;