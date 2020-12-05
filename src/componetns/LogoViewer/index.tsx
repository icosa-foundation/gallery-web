import { useRef, useEffect } from 'react'
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OrthographicCamera, AmbientLight, WebGLRenderer, Scene, Object3D } from 'three'
import { LOGO_VIEWER_DOM_ID, LOGO_OBJ_RUL } from '../../const'

function computedSize(): { width: number, height: number } {
    return {
        "width": window.innerWidth,
        "height": 500
    }
}

const CAMERA_VIEW_SIZE  = 1

export function LogoViewer() {
    const scene = useRef(new Scene())
    const light = useRef(new AmbientLight(0xFFFFFF))
    const render = useRef(new WebGLRenderer())
    const camera = useRef<OrthographicCamera>()
    const control = useRef<OrbitControls>()

    function renderScene() {
        render.current.render(scene.current, camera.current!)
    }

    function setCamera(width: number, height: number) {
        let aspectRatio = width / height
        camera.current = new OrthographicCamera(-aspectRatio * CAMERA_VIEW_SIZE, aspectRatio * CAMERA_VIEW_SIZE, CAMERA_VIEW_SIZE, -CAMERA_VIEW_SIZE, 0, 1000)
        camera.current.lookAt(scene.current.position)
        camera.current.position.set( 0, 0, 10 )
    }

    useEffect(() => {
        let loader = new OBJLoader2() 
        loader.load(LOGO_OBJ_RUL, function(obj: Object3D) {
            obj.position.set(0, 0.1, 0)
            obj.rotateY(55)
            scene.current.add(obj)
            scene.current.add(light.current)
            let size = computedSize()
            render.current.setSize(size.width, size.height)
            render.current.setPixelRatio(window.devicePixelRatio)
            setCamera(size.width, size.height)

            let container = window.document.getElementById(LOGO_VIEWER_DOM_ID)
            if(container) {
                container.appendChild(render.current.domElement)
                control.current = new OrbitControls(camera.current!, render.current.domElement)
                control.current.addEventListener('change', renderScene)
                renderScene()
            }
        })

    }, [])

    return (
        <div>
            <div id={LOGO_VIEWER_DOM_ID}></div>
        </div>
    )
}