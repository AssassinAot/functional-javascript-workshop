

function getDependenciesLoop(index,tree,getDependencies,output){
    if(index >= tree.length){
        return output;
    }
    output = getDependenciesLoop(output,tree[index],index,tree);

    return getDependenciesLoop(index+1,tree,getDependencies,output)
}
function getDependencies(tree){
    var startIndex = 0;
    return getDependenciesLoop(startIndex,tree,getDependencies,output);
}
module.exports = getDependencies;