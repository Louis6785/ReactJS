/// <reference path="../typings/tsd.d.ts" />

class DemoProps {
    public name : string;
}

class Demo extends React.Component<DemoProps, any> {
    constructor(props : DemoProps) {
        super(props);
    }

    render() {
        return <div>Hello {this.props.name}</div>
    }
}

ReactDOM.render(
    <Demo name="World" />,
    document.getElementById('example')
);