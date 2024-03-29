export const showVideo = (video) => {
    return {
        type: "SHOW_VIDEO",
        payload: {
            id: video.id.videoId,
            title: video.snippet.title,
            publishTime: video.snippet.publishTime,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails,
        },
    };
};

//Stores the new URL in State Management
export const updateVideoList = (newVids) => {
    // console.log('firing upate video list action');
    return {
        type: "UPDATE_VIDEOLIST",
        payload: {
            vids: newVids,
        },
    };
};

export const updateVideoDisplay = (video) => {
    // console.log('firing upate video display action');
    return {
        type: 'UPDATE_VIDEO_DISPLAY',
        payload: {
            vid: video,
        },
    };
};

export const updateDisplayPanelStatus = (status) => {
    // console.log('firing upate video display action');
    return {
        type: 'UPDATE_DISPLAY_PANEL_STATUS',
        payload: {
            displayPanelStatus: status,
        },
    };
};



export const updateDisplayVideoAvailability = (availability) => {
    
    return {
        type: "UPDATE_DISPLAY_VIDEO_AVAILABILITY",
        payload: {
            displayVideoAvailable: availability,
        },
    };
};

export const updateVideoListAvailability = (availability) => {
    
    return {
        type: "UPDATE_VIDEO_LIST_AVAILABLE",
        payload: {
            videoListAvailable: availability,
        },
    };
};

export const updateContainerSize = (size) => {
    
    return {
        type: "UPDATE_VIDEO_CONTAINER_SIZE",
        payload: {
            containerSize: size,
        },
    };
};

export const updateVideoURL = (url) => {
    
    return {
        type: "UPDATE_VIDEO_URL",
        payload: {
            newUrl: url,
        },
    };
};

export const removeVideolist = (videos) => {
    return {
        type: "REMOVE_VIDEOLIST",
        payload: {
            vids: videos,
        },
    };
};

export const updateSidePanelVisibility = (visibility) => {
    
    return {
        type: "UPDATE_VIDEO_URL",
        payload: {
            // newUrl: url,
        },
    };
};