export default {
  id: 'org.owdproject.explorer',
  title: 'Explorer',
  singleton: false,
  icon: 'mdi:folder-outline',
  provides: {
    name: 'explorer',
    entry: 'explorer',
  },
  windows: {
    main: {
      component: () => import('./components/Window/WindowExplorer.vue'),
      resizable: true,
      size: {
        width: 448,
        height: 240,
      },
      position: {
        x: 400,
        y: 240,
        z: 0,
      },
    },
  },
  entries: {
    explorer: {
      command: 'explorer',
    },
  },
  commands: {
    explorer: (app: IApplicationController, args: any) => {
      const meta = args ? { path: args[0] } : { path: '/' }
      app.openWindow('main', undefined, meta)
    },
  },
}
