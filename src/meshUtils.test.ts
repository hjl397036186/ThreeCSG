import {Mesh, BoxGeometry, Vector3} from 'three';
import {convertGeometryToTriangles} from './meshUtils';

describe('meshUtils', () => {
    describe ('convertMeshToTriangles', () => {
        it('converts a Three.Mesh with non-instanced geometry to Triangles', () => {
            const geometry = new BoxGeometry(5, 8, 8);
            const mesh = new Mesh(geometry);
            mesh.position.set(1, 2, 3);
            mesh.quaternion.set(0, 1, 0, 1).normalize();

            const triangles = convertGeometryToTriangles(mesh.geometry);
            expect(triangles).toMatchSnapshot();
        });
    });
});
