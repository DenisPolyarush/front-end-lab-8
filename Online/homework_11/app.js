//variant 1
var rootNode = document.getElementById("root");
var tree = document.createElement('div');
rootNode.appendChild(tree);

function createTree(data, node){
    for(let i = 0; i < data.length; i++)  {
        var branch = data[i];
        var title = document.createTextNode(branch.title)
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var p = document.createElement('p');
        if(branch.folder){
            ul.style.display = 'none';
            li.className = 'folder';
            p.innerHTML = '<i class="material-icons orange">&#xE2C7;</i>';
            p.appendChild(title);
            li.appendChild(p);
            ul.appendChild(li);
            node.appendChild(ul);
        };
        if(branch.folder && !branch.children){
            var text = document.createElement('em');
            text.style.display = 'none';           
            text.innerHTML = 'Folder is empty';
            ul.appendChild(text)
         };
        if(!branch.folder){
            li.style.display = 'none';
            p.innerHTML = '<i class="material-icons grey">&#xE24D;</i>';
            p.appendChild(title);
            li.appendChild(p);
            node.appendChild(li);
        };
        if(branch.children){
            createTree(branch.children, ul)
        }
    }
}
function click(){
    var folder = document.getElementsByClassName('folder');
    for(var i = 0; i< folder.length; i++){
        
        folder[i].onclick = function(){
            var icon = this.getElementsByTagName('i');
            var siblings = getAllNextSiblings(this);
            
            if(this.className === 'folder open'){
                for(var i=0; i< siblings.length; i++){
                    this.classList.remove('open');
                    icon[0].innerHTML = '&#xE2C7;';
                    console.log(siblings[i])
                    siblings[i].style.display = 'none';
                }
            }else{
                for(var i=0; i< siblings.length; i++){
                    this.classList.add('open');
                    icon[0].innerHTML = '&#xE2C8;';
                    siblings[i].style.display = 'block';
                    console.log(siblings[i])
                }
            }
        }
    }
}
function getAllNextSiblings(element) {
    var out = [];
    while(element.nextSibling) {
        out.push(element = element.nextSibling);
    }
    return out;
}
function firstFolderVisible (){
    for(i =0; i < tree.children.length; i++){
        tree.children[i].style.display = 'block';
    }
}

createTree(structure, tree);
click();
firstFolderVisible();

//variant 2

//var rootNode = document.getElementById("root");
//var tree = document.createElement('div');
//rootNode.appendChild(tree);
//
//function createTree(data, node) {
//    for(let i = 0; i < data.length; i++)  {
//        var branch = data[i];
//        var text = document.createTextNode(branch.title);
//        var ul = document.createElement('details');
//        if(branch.folder){
//            var summary = document.createElement('summary')
//            summary.innerHTML = '<i class="material-icons orange">&#xE2C7;</i>';
//            summary.appendChild(text);
//            ul.appendChild(summary)
//            node.appendChild(ul);
//        };
//         if(branch.folder && !branch.children){
//            var empty = document.createElement('em');
//            empty.innerHTML = 'Folder is empty';
//            ul.appendChild(empty)
//        };
//        if(!branch.folder){
//            var li = document.createElement('li');
//            li.innerHTML = '<i class="material-icons grey">&#xE24D;</i>';
//            li.appendChild(text);
//            node.appendChild(li);
//        };
//        if(branch.children){
//            createTree(branch.children, ul)
//        }
//    }
//}
//function click(){
//    var summary = document.getElementsByTagName('summary');
//    for(var i = 0; i< summary.length; i++){
//        summary[i].onclick = function(){
//            var icon = this.getElementsByTagName('i');
//            if(this.className === 'open'){
//                this.classList.remove('open');
//                icon[0].innerHTML = '&#xE2C7;';
//            }else{
//                this.classList.add('open');
//                icon[0].innerHTML = '&#xE2C8;';
//            }
//        }
//    }
//}
//createTree(structure, tree);
//click();