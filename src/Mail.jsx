/** @format */

import React, { useRef } from "react";
import { Form, Input, Button } from "antd";
import emailjs from "emailjs-com";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} es requerido!",
  types: {
    email: "${label} no es válido!",
  },
  number: {
    range: "${label} debe ser mayor que ${min} y menor que ${max}",
  },
};

const Mail = () => {
  const form = useRef(null);

  const sendEmail = (values) => {
    console.log("VALUES", values.attachment);
    const attachmentData = values.attachment;

    // enviar el formulario utilizando emailjs
    emailjs
      .sendForm(
        "service_50my90o",
        "template_g7nhzdq",
        document.getElementById("#myForm"),
        "PmEa6BoX3zJ1n-2pa",
        { attachment: attachmentData }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <Form
      id="myForm"
      {...layout}
      name="nest-messages"
      onFinish={sendEmail}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
      ref={form}>
      <Form.Item
        name={["user", "name"]}
        label="Nombre"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input defaultValue="" />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Correo electrónico"
        rules={[
          {
            type: "email",
          },
        ]}>
        <Input defaultValue="" />
      </Form.Item>

      <Form.Item name={["user", "introduction"]} label="Introducción">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Archivo" name="attachment">
        <input
          type="file"
          name="attachment"
          onChange={handleFileChange}
          defaultValue=""
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Mail;
