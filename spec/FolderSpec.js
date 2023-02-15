const { newFolderName } = require('../server.js')

describe('folder names', function () {
  it('should generate "New Folder" with an empty array', function () {
    const result = newFolderName([])
    expect(result).toBe('New Folder')
  })

  it('should generate "New Folder" if that name does\'t exist', function () {
    expect(newFolderName(['a folder', 'new folder'])).toBe('New Folder')

    const folders = ['New Folder (1)', 'New Folder (2)', 'New Folder (3)']
    expect(newFolderName(folders)).toBe('New Folder')
  })

  it('should generate "New Folder (2)" if "New Folder" exists', function () {
    const folders = ['Documents', 'New Folder (5)', 'New Folder']
    expect(newFolderName(folders)).toBe('New Folder (2)')
  })

  it('should generate the next available "New Folder (n + 1)"', function () {
    const folders0 = ['New Folder (2)', 'New Folder']
    expect(newFolderName(folders0)).toBe('New Folder (3)')

    const folders1 = [
      'New Folder (4)',
      'New Folder (2)',
      'New Folder',
      'New Folder (3)',
      'New Folder (6)'
    ]
    expect(newFolderName(folders1)).toBe('New Folder (5)')
  })
})
