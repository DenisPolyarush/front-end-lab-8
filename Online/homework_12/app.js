let rootNode = document.getElementById('root');

const createTanksPreview = (data, node) => {
    let thumbnails = document.createElement('div');
    thumbnails.classList.add('thumbnails');
    
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Most popular tanks';
    thumbnails.appendChild(h1);
    
    let tanksCollection = document.createElement('div');
    tanksCollection.classList.add('tanks_collection');
    
    for(let i = 0; i < data.length; i++)  {
        let branch = data[i];
//        creating Elements
        let block = document.createElement('div');
        let preview = document.createElement('img');
        let description = document.createElement('div');
        let icon = document.createElement('img');
        let level = document.createElement('p');
        let model = document.createElement('p');
//        adding classes
        block.classList.add('block');
        preview.classList.add('preview');
        description.classList.add('descr');
        icon.classList.add('icon');
        level.classList.add('level');
        model.classList.add('model', 'white');
//        adding attribute
        block.setAttribute('title', 'Click to details');
        icon.setAttribute('title', branch.country);
        model.setAttribute('title', branch.model);
        level.setAttribute('title', `level ${branch.level}`);
//        adding content
        preview.src = branch.preview;
        icon.src = branch.country_image;
        level.innerHTML = branch.level;
        model.innerHTML = branch.model;
//        block formation
        description.appendChild(icon);
        description.appendChild(level);
        description.appendChild(model);
        block.appendChild(preview);
        block.appendChild(description);
//        adding to a node
        tanksCollection.appendChild(block);
//        adding event ckick
        block.addEventListener('click', function(){
            let str = branch.model;
            let hashModel = str.split(' ').join('-').toLocaleLowerCase();
            location.hash = hashModel;
        })
    }
    thumbnails.appendChild(tanksCollection)
    return thumbnails;
};

const createDetailsTanks = (data) => {
    let tankDetails = document.createElement('div');
    tankDetails.classList.add('tank-details');
    let branch = data;
//         creating description
    let description = document.createElement('div');
    let icon = document.createElement('img');
    let level = document.createElement('p');
    let model = document.createElement('p');
    description.classList.add('descr');
    icon.classList.add('icon');
    icon.setAttribute('title', branch.country);
    level.classList.add('level');
    model.classList.add('model');
    icon.src = data.country_image;
    level.innerHTML = `(level ${data.level})`;
    model.innerHTML = data.model;
    description.appendChild(icon);
    description.appendChild(model);
    description.appendChild(level);
//        creating content
    let content = document.createElement('div');
//        creating block Preview
    let blockPreview = document.createElement('div');
    let previewText = document.createElement('p');
    let preview = document.createElement('img');
    preview.classList.add('preview');
    blockPreview.classList.add('block_preview');
    previewText.innerHTML = 'Preview';
    preview.src = data.preview;
    blockPreview.appendChild(previewText);
    blockPreview.appendChild(preview);
//        creating block characteristic
    let characteristic = document.createElement('div');
    characteristic.classList.add('characteristic');
    let table = document.createElement('table');
    let caption = document.createElement('caption');
    table.appendChild(caption);
    caption.innerHTML = 'Characteristic';

    for(let key in data.details){
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td = document.createElement('td');
        th.innerHTML = key;
        tr.appendChild(th);
        td.innerHTML = data.details[key];
        tr.appendChild(td);
        table.appendChild(tr);
    };
    characteristic.appendChild(table);
//        content formatting
    content.classList.add('content');
    content.appendChild(blockPreview);
    content.appendChild(characteristic);
//        add link to back
    let back = document.createElement('a');
    back.classList.add('back');
    back.href = '#'
    back.innerHTML = 'Back to list view';
//        adding to a node
    tankDetails.appendChild(description);
    tankDetails.appendChild(content);
    tankDetails.appendChild(back);
    return tankDetails;
}

function changeHash(){
    let hash = location.hash.slice(1);
    tanks.forEach(function(el){
        let model = el.model.split(' ').join('-').toLocaleLowerCase();
        if(model === hash){
            rootNode.innerHTML= '';
            rootNode.appendChild(createDetailsTanks(el));
        }
    })
    if(hash === ''){
        rootNode.innerHTML= '';
        rootNode.appendChild(createTanksPreview(tanks));
    }
}
rootNode.appendChild(createTanksPreview(tanks));
window.onhashchange = changeHash;