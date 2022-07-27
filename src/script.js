const grades = [9, 10, 8, 2, 1, 9, 0, 6, 7, 3, 8]

// Nota acima da média
const aboveAverageGrades = (arrGrades => {
    const media = []
    for (let i = 0; i < arrGrades.length; i++) {
        if (arrGrades[i] > 8) {
          media.push(arrGrades[i])  
        }
    }
    return media
})

// Nota na média
const averageGrades = (arrGrades => {
    const media = []
    for (let i = 0; i < arrGrades.length; i++) {
        if (arrGrades[i] == 8) {
            media.push(arrGrades[i])
        }
    }
    return media
})

// Notas abaixo da média
const belowAverageGrades = (arrGrades => {
    const media = []
    for (let i = 0; i < arrGrades.length; i++) {
        if (arrGrades[i] < 8) {
            media.push(arrGrades[i])
        }
    }
    return media
})

// Soma total das notas
const sumOfAllGrades = (arrGrades => {
    let somaNota = 0
    for (let i = 0; i < arrGrades.length; i++) {
        somaNota += arrGrades[i]
    }
    return somaNota
})

// A média de todos as notas
const averageOfGrades = (arrGrades => {
    let somaNota = 0
    for (let i = 0; i < arrGrades.length; i++) {
        somaNota += arrGrades[i]
    }
    let media = somaNota / arrGrades.length

    return media.toFixed(2)
})

// Retorna a maior nota
const maxGrade = (arrGrades => {
    let maiorNota = 0
    for (let i = 0; i < arrGrades.length; i++) {
        maiorNota = Math.max(...arrGrades)
    }
    return maiorNota
})

// Retorna a menor nota
const minGrade = (arrGrades => {
    let menorNota = 0
    for (let i = 0; i < arrGrades.length; i++) {
        menorNota = Math.min(...arrGrades)
    }
    return menorNota
})
