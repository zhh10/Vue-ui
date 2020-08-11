<template>
    <div class="el-input" :class="wrapperClass">
         <!-- 输入框头部icon  -->
        <span class='el-input__icon' v-if="!(clearable || showPassword) && icon">
            <span class="el-input__icon__inner">
                <el-icon :name="icon" class="el-input-icon"></el-icon>
            </span>
        </span>
        <input
        :value="value"
        :type="ispassword?'password':'text'"
        class="el-input--inner"
        :class="[
          disabled?`is-disabled`:''
        ]"
        :disabled = "disabled"
        :placeholder = "placeholder"
        @input="$emit('input',$event.target.value)">
      <span class="el-input__suffix" v-if="clearable && value || showPassword">
        <!-- 这个是清除icon -->
        <span class="el-input__suffix__inner" @click="handleDelete" v-if="clearable">
          <el-icon name="close" class="el-input-icon"></el-icon>
        </span>
        <!-- 这个是密码icon -->
        <span class="el-input__suffix__inner" @click="switchPassword" v-if="showPassword">
          <el-icon name="view" class="el-input-icon"></el-icon>
        </span>
      </span>
    </div>
</template>
<script>
export default {
  name: 'ElInput',
  props: {
    value: String || Number,
    icon: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String || Number,
      icon: String,
      default: '请输入内容',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      passwordType: this.showPassword,
    };
  },
  computed: {
    ispassword() {
      return !!this.passwordType;
    },
    wrapperClass() {
      const classList = [];
      if (this.clearable || this.showPassword) {
        classList.push('el-input--suffix');
      } else if (this.icon) {
        classList.push('el-input--icon');
      }
      return classList;
    },
  },
  methods: {
    handleDelete() {
      this.$emit('input', '');
    },
    switchPassword() {
      this.passwordType = !this.passwordType;
    },
  },
};
</script>
