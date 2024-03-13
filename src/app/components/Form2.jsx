import React, { useState } from "react";
import { Button, Form, Input, Select, Spin } from "antd";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

export default function Form2({ isVisible, onClose }) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const simulateRegisterRequest = async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(formData);
      }, 2000);
    });
  };
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await simulateRegisterRequest(values);
      console.log("Registro exitoso:", response);
    } catch (error) {
      console.error("Error al registrar:", error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  if (!isVisible) return null;

  return (
    <div
      className={`modal_overlay fixed inset-0 bg-gray-600 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 `}
    >
      <div
        className={`modal w-[300px] md:w-[600px] flex flex-col ${
          isVisible
            ? "animate-fade-down animate-once animate-ease-linear animate-duration-300"
            : "hidden"
        }  `}
      >
        <button
          className="text-black text-xl place-self-end border-2 border-black/50 w-8 "
          onClick={() => onClose()}
        >
          x
        </button>
        <div className="bg-white text-black p-4 rounded">
          <span className="font-bold">
            Agenda una cita y experimenta el potencial del comercio electrónico
          </span>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ prefix: "86" }}
            style={{ maxWidth: 600, margin: 20 }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                { type: "email", message: "The input is not valid E-mail!" },
                { required: true, message: "Please input your E-mail!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Nombre_Completo"
              label="Nombre Completo"
              rules={[
                {
                  required: true,
                  message: "Porfavor ingresa tu Nombre Completo",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                className="bg-verdeInicio"
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                {loading ? "Loading" : "Register"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
