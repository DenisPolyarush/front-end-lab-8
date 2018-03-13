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
        var icon = document.createElement('i'); //icon created with JS DOM operations
        if(branch.folder){
            ul.style.display = 'none';
            li.className = 'folder';
            icon.innerHTML = '&#xE2C7;';
            icon.classList.add('material-icons', 'orange');
            p.appendChild(icon);
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
            icon.innerHTML = '&#xE24D;';
            icon.classList.add('material-icons', 'grey');
            p.appendChild(icon);
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
                    siblings[i].style.display = 'none';
                }
            }else{
                for(var i=0; i< siblings.length; i++){
                    this.classList.add('open');
                    icon[0].innerHTML = '&#xE2C8;';
                    siblings[i].style.display = 'block';
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