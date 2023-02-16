import { List as ListAnt } from "antd";

const List = ({ data = [] }) => (
  <>
    <ListAnt
      size="large"
      bordered
      dataSource={data}
      renderItem={item => (
        <ListAnt.Item>
          {item.id} {item.content}
        </ListAnt.Item>
      )}
    />
  </>
);
export default List;
