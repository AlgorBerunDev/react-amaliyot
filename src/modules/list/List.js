import { List as ListAnt, Button } from "antd";

const List = ({ data = [], removeItem = () => {} }) => (
  <>
    <ListAnt
      size="large"
      bordered
      dataSource={data}
      renderItem={item => (
        <ListAnt.Item>
          {item.id} {item.content}{" "}
          <Button
            type="primary"
            onClick={() => {
              removeItem(item.id);
            }}
          >
            Remove
          </Button>
        </ListAnt.Item>
      )}
    />
  </>
);
export default List;
