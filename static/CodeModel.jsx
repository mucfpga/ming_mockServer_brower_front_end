class CodeModel extends React.Component {
    constructor(props) {
        super(props);
        M.CodeModel_this=this;
    }
    changeLanguage(props){
        let codeValue=""
        codeValue=props.functionBody;
        $("#codeEditId").children().remove();
        require.config({
            baseUrl: 'https://minglie.gitee.io/mingpage/static/public/monacoeditor', paths: { 'vs': 'min/vs' }});
        require(['vs/editor/editor.main'], function() {
            var editor = monaco.editor.create(document.getElementById('codeEditId'), {
                value: [
                    codeValue
                ].join('\n'),
                language: props.language,
                theme:'vs-dark',
                automaticLayout:true,
                minimap: {
                    enabled:false
                }
            });
            M.editor=editor;
            $($("#codeEditId").children("div").get(0)).css({ height: "1000px", width: "20px" });
        })}
    componentDidMount(){
        this.changeLanguage(this.props)
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //console.log('componentWillUpdate',nextProps, nextState, nextContext,this.props)
        this.changeLanguage(nextProps)
    }

    render(){
        return (
            <div id="box">
                <div id="codeEditId" style={{width:"100%",float:"right"}}>
                </div>
            </div>
        )}
}