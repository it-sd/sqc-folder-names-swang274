const newFolderName = function (folders) {
  const numberArr = []
  let folderNum
  if (folders.length > 0) {
    // create a folder number array
    for (const folder of folders) {
      if (folder.includes('New Folder')) {
        // find the number if exist after "New Folder"
        let number = folder.match(/\d+/)
        if (number) {
          number = parseInt(number.join(''))
        } else {
          number = 0
        }
        numberArr.push(number)
      }
    }
    // sort the folder number array ascendant
    if (numberArr.length > 0) {
      quickSort(numberArr, 0, numberArr.length - 1)
    } else {
      return 'New Folder'
    }
    // find the missing folder number or create a new number
    let temp
    for (let i = 0; i < numberArr.length; i++) {
      temp = i === 0 ? 0 : i + 1
      if (temp !== numberArr[i]) {
        folderNum = i === 0 ? 0 : i + 1
        return folderNum === 0 ? 'New Folder' : `New Folder (${folderNum})`
      }
    }
    return `New Folder (${temp + 1})`
  } else {
    return 'New Folder'
  }
}

function quickSort (arr, head, tail) {
  if (head < tail) {
    const pivotIndex = partition(arr, head, tail)
    quickSort(arr, head, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, tail)
  }
}

function partition (arr, head, tail) {
  const compareValue = arr[tail]
  let swapPoint = head - 1
  for (let i = head; i < tail; i++) {
    if (arr[i] < compareValue) {
      swapPoint++
      const swapTemp = arr[swapPoint]
      arr[swapPoint] = arr[i]
      arr[i] = swapTemp
    }
  }
  const swapTemp = arr[swapPoint + 1]
  arr[swapPoint + 1] = arr[tail]
  arr[tail] = swapTemp
  return swapPoint + 1
}
module.exports = { newFolderName }
