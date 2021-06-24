const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tnyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(start)

function start() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

start()
