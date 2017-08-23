//第一種寫法
//			var Component = React.createClass({
//				render : function(){
//					return React.DOM.div({},"hello world2" + this.props.name);
//				}
//			})
//			
//			ReactDOM.render(React.createElement(Component,{name:"wayne"}),document.getElementById("app"))


//第二種寫法
//class MyComponent extends React.Component {
//	// render 是 Class based 元件唯一必須的方法（method）
//	render() {
//		return (
//			<div>Hello, {this.props.name} , {this.props.children}</div>
//		);
//	}
//}
//
//ReactDOM.render(<MyComponent name="wayne">dddd</MyComponent>, document.getElementById('app'));

//第三種寫法//請切換下方組件
//let a=1;
//const A_kkk = () => (
//  <div>
//    <p>test {a}</p>
//  </div>
//)

//const MyComponednt =(props) => (
//	<div>Hello, {props.name}</div>
//)

var names= [ 'h', 'e', 'l', 'l', 'o'];
const Ggg = () => (
<div>{names.map(function (name, index) {return <div key={index}>Hello, {name}!</div>})}</div>
)

//請更改組件字串
ReactDOM.render(<Ggg name="wayne1894"/>, document.getElementById('app'));

//狀態

//var ggg=3
//var LikeButton = React.createClass({
//	getInitialState: function() {
//		return {liked: false};
//	},
//	handleClick: function(event) {
//		this.setState({liked: !this.state.liked});
//	},
//	componentWillReceiveProps : function(newProps){
//		console.log(newProps)
//		//return newProps + "gg"
//	},
//	render: function() {
//		var text = this.state.liked ? 'like' : 'haven\'t liked';
//			return (
//				<p onClick={this.handleClick} ref="myTextInput">
//				You {text} this. Click to toggle.{this.props.name}
//				</p>
//			);
//		}
//});
//
//var aaa=ReactDOM.render(<LikeButton name="wayne1894"/>, document.getElementById('app'));
//
//var BBB=ReactDOM.render(<LikeButton name="1234"/>, document.getElementById('app2'));


//元件生命周期
//class MyComponent extends React.Component {
//  constructor(props) {
//    super(props);
//    console.log('0constructor');
//    this.handleClick = this.handleClick.bind(this);
//    this.state = {
//      name: 'Mark',
//    }
//  }
//  handleClick() {
//    this.setState({'name': 'Zuck'});
//  }
//  componentWillMount() {
//    console.log('1componentWillMount');
//  }
//  componentDidMount() {
//    console.log('2componentDidMount');
//  }
//  componentWillReceiveProps() {
//    console.log('3componentWillReceiveProps');
//  }
//  componentWillUpdate() {
//    console.log('4componentWillUpdate');
//  }
//  componentDidUpdate() {
//    console.log('5componentDidUpdate');
//  }
//  componentWillUnmount() {
//    console.log('6componentWillUnmount');
//  }
//  render() {
//    return (
//      <div onClick={this.handleClick}>Hi, {this.state.name}</div>
//    );
//  }
//}
//
//ReactDOM.render(<MyComponent />, document.getElementById('app'));
