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

const {
  Tabs,
  TabsHeader,
  TabsHeaderItem,
  TabsContent,
  TabsContentItem,
} = Tabs_;
const { Collapse, CollapseItem } = Collapse_;

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
];

const install = (Vue) => {
  components.forEach((item) => {
    Vue.component(item.name, item);
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
  Upload
};
