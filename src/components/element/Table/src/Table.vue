<template>
    <div class="el-table--wrapper" ref="Wrapper">
        <div class="el-table--tableWrapper"
        :style="{height:height+'px',overflow:'auto'}"
        ref="tableWrapper">
            <Table class="el-table"
            ref="table"
            :class="[{'is-border':border,'is-compact':compact}]">
                <thead>
                    <tr>
                        <th v-if="checkable"
                        class="el-table--header"
                        style="width:50px;text-align:center;">
                            <input  type="checkbox"
                            @change="onChangeAll($event)"
                            :checked="isAllSelected"/>
                        </th>
                        <th v-if="showID" 
                        style="width:50px;"
                        class="el-table--header">ID</th>
                        <th v-for="column in columns" 
                        :style="{width:column.width + 'px'}"
                        :key="column.field"
                        class="el-table--header">
                            {{column.name}}
                        </th>
                        <th ref="buttonGroupHeader"
                        class="el-table--header"
                        v-if="$scopedSlots.default"></th>
                        <th class="el-table--header" 
                        v-if="fixHeader"
                        style="width:15px;border:none;box-sizing:border-box"></th>
                    </tr>
                </thead>
                <tbody class="el-table--body">
                    <template v-for="(item,index) in dataSource">
                        <tr :key="item.id">
                            <td v-if="checkable"
                            class="el-table--item"
                            style="width:50px;text-align:center;">
                                <input type="checkbox"
                                @change="onChangeItem(item,index,$event)"
                                :checked = "selectArray.some(i => i.id === item.id)" />
                            </td>
                            <td v-if="showID" 
                            style="width:50px;"
                            class="el-table--item">{{item.id}}</td>
                            <template v-for="column in columns">
                                <td :key="column.field" 
                                :style="{width:column.width + 'px'}"
                                class="el-table--item">
                                    {{item[column.field]}}
                                </td>
                            </template>
                            <td class="el-table--item" 
                            ref="buttonGroupItem"
                            v-if="$scopedSlots.default">
                                <template>
                                    <div style="display:inline-block;" ref="buttonGroup">
                                        <slot v-bind:item="item" v-bind:index="index"></slot>
                                    </div>
                                </template>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </Table>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ElTable',
  props: {
    columns: Array,
    showID: {
      type: Boolean,
      default: true,
    },
    checkable: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    selectArray: {
      type: Array,
      default: () => [],
    },
    fixHeader: Boolean,
    height: Number,
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        return !(array.filter((item) => item.id === 'undefined').length > 0); // 必须为false
      },
    },
  },
  computed: {
    isAllSelected() {
      // 找出双方的ID 进行排序 一一对比
      const a = this.dataSource.map((item) => item.id).sort((x, y) => x - y);
      const b = this.selectArray.map((item) => item.id).sort((x, y) => x - y);
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i += 1) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    // 表格点击事件
    onChangeItem(item, index, e) {
      const selected = e.target.checked;
      let selectedCopy = JSON.parse(JSON.stringify(this.selectArray));
      if (!selected) {
        //  如果为false 就从数组中去除掉这个item
        selectedCopy = selectedCopy.filter((i) => i.id !== item.id);
      } else {
        selectedCopy.push(item);
      }
      this.$emit('selectItem', { item, index });
      this.$emit('update:selectArray', selectedCopy);
    },
    // 选择全部事件
    onChangeAll(e) {
      const selected = e.target.checked;
      let selectedCopy;
      if (!selected) {
        // 如果为false
        selectedCopy = [];
      } else {
        selectedCopy = JSON.parse(JSON.stringify(this.dataSource));
      }
      this.$emit('update:selectArray', selectedCopy);
    },
  },
  mounted() {
    // 设置编辑按钮的宽度
    if (this.$scopedSlots.default) {
      const buttonGroup = this.$refs.buttonGroup[0];
      const { width } = buttonGroup.getBoundingClientRect();
      const { buttonGroupHeader } = this.$refs;
      const buttonGroupParent = buttonGroup.parentNode;
      const styles = getComputedStyle(buttonGroupParent);
      const paddingLeft = styles.getPropertyValue('padding-left');
      const paddingRight = styles.getPropertyValue('padding-right');
      const borderLeft = styles.getPropertyValue('border-left-width');
      const borderRight = styles.getPropertyValue('border-right-width');
      const totalWidth = `${width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight)}px`;
      buttonGroupHeader.style.width = totalWidth;
      this.$refs.buttonGroupItem.map((item) => {
        item.style.width = totalWidth;
      });
    }

    // 固定表头
    if (this.fixHeader) {
      const table = this.$refs.table.cloneNode(false);
      table.classList.add('el-table--Copy');
      const tHeader = this.$refs.table.children[0];
      const { height } = tHeader.getBoundingClientRect();// theader的高度
      this.$refs.tableWrapper.style.marginTop = `${height}px`;
      this.$refs.tableWrapper.style.height = `${height - this.height}px`;
      table.appendChild(tHeader);
      this.$refs.Wrapper.appendChild(table);
    }
  },
};
</script>
