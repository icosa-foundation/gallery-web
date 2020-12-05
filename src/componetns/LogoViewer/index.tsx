import { Canvas, useLoader } from 'react-three-fiber'
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2'


function Asset(url: string) {
    const obj = useLoader(OBJLoader2, url)
    return <primitive object={obj} />
}

export function LogoViewer() {
    return (
        <div>
            <Canvas>
                <ambientLight />
                
            </Canvas>
        </div>
    )
}