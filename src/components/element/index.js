import Col from '@element/Col';
import Row from '@element/Row';
import Container from '@element/Container';
import Main from '@element/Main';
import Header from '@element/Header';
import Footer from '@element/Footer';
import Aside from '@element/Aside';
import Button from '@element/Button';
import Icon from '@element/Icon';
import ButtonGroup from '@element/ButtonGroup';
import Link from '@element/Link';
import Input from '@element/Input';
import Textarea from '@element/Textarea';
import Tabs_ from '@element/Tabs';
import Collapse_ from '@element/Collapse';
import Pager from '@element/Pager';
import Table from '@element/Table';
import Sticky from '@element/Sticky';
import Rate from '@element/Rate';
import Upload from '@element/Upload';
import Bread_ from '@element/Breadcrumb';
import Message from '@element/Message';
import MessageBox from '@element/MessageBox';
import Switch from '@element/Switch';
import Notify from '@element/Notify';
import Cascader_ from '@element/Cascader';
import Slides_ from '@element/Slides';
import Steps_ from '@element/Steps';
import Drag_ from "@element/Drag";
const {
  Tabs,
  TabsHeader,
  TabsHeaderItem,
  TabsContent,
  TabsContentItem,
} = Tabs_;
const { Collapse, CollapseItem } = Collapse_;
const { Breadcrumb,BreadcrumbItem } = Bread_
const {Cascader,CascaderItem} = Cascader_;
const {Slides,SlidesItem} = Slides_;
const {Steps,Step} = Steps_;
const {DragWrap,DragItem} = Drag_;
const components = [
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Button,
  Icon,
  ButtonGroup,
  Link,
  Input,
  Textarea,
  Tabs, TabsHeader, TabsHeaderItem, TabsContent, TabsContentItem,
  Collapse, CollapseItem,
  Pager,
  Table,
  Sticky,
  Rate,
  Upload,
  Breadcrumb,
  BreadcrumbItem,
  Message,
  MessageBox,
  Switch,
  Notify,
  Cascader,CascaderItem,
  Slides,SlidesItem,
  Steps,Step,
  DragWrap,DragItem,
];

const install = (Vue) => {
  components.forEach((item) => {
    if(item.name === 'ElMessage'||item.name === "ElMessageBox"||item.name==="ElNotify"){
        item.install(Vue)
    }else{
        Vue.component(item.name, item);
    }
  });
};

export default {
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Button,
  Icon,
  ButtonGroup,
  Link,
  Input,
  Textarea,
  Tabs,
  TabsHeader,
  TabsHeaderItem,
  TabsContent,
  TabsContentItem,
  Collapse,
  CollapseItem,
  Pager,
  Table,
  Sticky,
  Rate,
  Upload,
  Breadcrumb,
  BreadcrumbItem,
  Switch,
  Cascader,CascaderItem,
  Slides,SlidesItem,
  Steps,Step,
  DragWrap,DragItem,
};

export {
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Button,
  Icon,
  ButtonGroup,
  Link,
  Input,
  Textarea,
  Tabs, TabsHeader, TabsHeaderItem, TabsContent, TabsContentItem,
  Collapse, CollapseItem,
  Pager,
  Table,
  Sticky,
  Rate,
  Upload,
  Breadcrumb,
  BreadcrumbItem,
  Switch,
  Cascader,CascaderItem,
  Slides,SlidesItem,
  Steps,Step,
  DragWrap,DragItem
};
