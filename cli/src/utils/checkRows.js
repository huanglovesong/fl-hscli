import findIndex from 'lodash/findIndex';
import remove from 'lodash/remove';

export default (value, selectedRowKeys, selectedRows, param) => {
  return {
    selectedRowKeys,
    onChange(selectedRowKeys) {
      value.setState({ selectedRowKeys });
    },
    onSelect: (record, selected) => {
      if (selected) {
        // 如果数组里面不存在则做添加
        if (findIndex(selectedRows, record[param]) < 0) {
          selectedRows.push(record);
        }
      } else {
        remove(selectedRows, (n) => {
          return n[param] === record[param];
        });
      }
      value.setState({
        selectedRows
      });
    },
    onSelectAll: (selected, selectedRow, changeRows) => {
      if (selected) {
        for (let index = 0; index < changeRows.length; index += 1) {
          if (findIndex(selectedRows, changeRows[index][param]) < 0) {
            selectedRows.push(changeRows[index]);
          }
        }
      } else {
        for (let index = 0; index < changeRows.length; index += 1) {
          remove(selectedRows, (n) => (
            n[param] === changeRows[index][param]
          ));
        }
      }
      value.setState({
        selectedRows
      });
    }
  };
};
