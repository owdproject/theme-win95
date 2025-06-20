export default {
  systemBar: {
    start: {
      button: {
        label: 'Start',
      },
    },
    applicationList: {
      empty: 'There are no applications'
    }
  },
  fs: {
    contextMenu: {
      'open': 'Open',
      'rename': 'Rename',
      'delete': 'Elimina',
    }
  },
  apps: {
    explorer: {
      menu: {
        file: 'File',
        edit: 'Edit',
        view: 'View',
        help: 'Help',
      },
      action: {
        back: 'Back',
        forward: 'Forward',
        up: 'Up',
        undo: 'Undo',
        delete: 'Delete',
        properties: 'Properties',
        newFolder: 'New Folder',
        ok: 'OK',
        cancel: 'Cancel',
        close: 'Close',
        cut: 'Cut',
        copy: 'Copy',
        rename: 'Rename',
        paste: 'Paste',
        pasteShortcut: 'Paste shortcut',
        selectAll: 'Select All',
        invertSelection: 'Invert selection',
        refresh: 'Refresh',
        sortBy: 'Sort by',
        about: 'About Explorer'
      },
      layout: {
        largeIcons: 'Large Icons',
        smallIcons: 'Small Icons',
        list: 'List',
        details: 'Details',
      },
      sortBy: {
        name: 'Name',
        size: 'Size',
        date: 'Date Modified',
      },
      dialog: {
        deleteFiles: {
          confirm: {
            title: 'Confirm Files Delete',
            message: "Are you sure you want to remove {count} files?"
          }
        },
        deleteFolder: {
          confirm: {
            title: 'Confirm Folder Delete',
            message: "Are you sure you want to remove the folder {name} and all its content?"
          }
        },
        fileOverride: {
          confirm: {
            title: 'Confirm File Replace',
            message: "The folder already contains a file named {name}."
          }
        },
        shortcutOverride: {
          confirm: {
            title: 'Confirm File Replace',
            message: "The folder already contains a file named {name}."
          }
        }
      }
    }
  },
}
