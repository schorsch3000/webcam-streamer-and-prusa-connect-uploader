const refresh=function(){
    let video=document.getElementById('video');

    let action=document.hidden?'snapshot':'stream';
    video.setAttribute('src','?action='+action+'_'+video.getAttribute('data-camnum')+'&cachebust='+new Date().getTime());
}

document.getElementById('video').addEventListener('click', function() {

    let video=document.getElementById('video');
    let current_cam_num=video.getAttribute('data-camnum');

    let next_cam_num=parseInt(current_cam_num)+1;
    if(next_cam_num>=camCount){
        next_cam_num=0;
    }

    video.setAttribute('data-camnum',next_cam_num);
    refresh();

})

window.setInterval(refresh, 1000)