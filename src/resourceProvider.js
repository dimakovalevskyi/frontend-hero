export class ResourceProvider {
    constructor() {
        this.resourcesToLoad = [];
        this.resouces = {};
    }

    importResources(source) {
        for (let resourceType in source) {
            if (!source.hasOwnProperty(resourceType)) {
                continue;
            }
            for (let resource in source[resourceType]) {
                if (!source[resourceType].hasOwnProperty(resource)) {
                    continue;
                }
                this.resourcesToLoad.push({
                    type: resourceType,
                    name: resource,
                    value: source[resourceType][resource],
                    isLoaded: false,
                });
                if (!this.resouces[resourceType]) {
                    this.resouces[resourceType] = {};
                }
            }
        }
    }

    load(resources, scenes) {
        this.importResources(resources);
        for (let scene in scenes) {
            if (!scenes.hasOwnProperty(scene)) {
                continue;
            }
            this.importResources(scenes[scene].resources);
        }
        return Promise.all(this.resourcesToLoad.map(resource => this.loadResource(resource)));
    }

    loadResource(resource) {
        return new Promise((resolve, reject) => {
            if (resource.type === 'graphics') {
                this.loadImage(resource).then(resolve);
            }
        });
    }

    loadImage(resource) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            this.resouces[resource.type][resource.name] = image;
            image.onload = () => {
                resource.isLoaded = true;
                resolve();
            };
            image.src = resource.value;
        });
    }

    getResource(type, name) {
        return this.resouces[type][name];
    }
}
