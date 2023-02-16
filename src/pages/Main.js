import React, { useState } from "react";
import { Input, Row, Col, Button, Divider, Form } from "antd";
import List from "../modules/list/List";

export default function Main() {
  const [list, setList] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [form] = Form.useForm();

  const addTodo = ({ content }) => {
    setLastIndex(oldLastIndex => oldLastIndex + 1);
    setList(oldList => [...oldList, { id: lastIndex, content }]);
  };

  const removeTodo = id => {
    setList(function (old) {
      return old.filter(item => item.id !== id);
    });
  };

  const onFinish = values => {
    addTodo(values);
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ padding: 10 }}>
      <Form form={form} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item name="content">
              <Input rules={[{ required: true, message: "Iltimos todo nomini kiriting!" }]} />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Button type="primary" htmlType="submit">
              Add todo{" "}
            </Button>
          </Col>
          <Col span={2}>
            <Button htmlType="reset">Reset</Button>
          </Col>
        </Row>
      </Form>
      <Divider />
      <List data={list} removeItem={removeTodo} />
    </div>
  );
}
