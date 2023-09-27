import { Stepper, StepperProps } from '@mui/material'
import { ReactNode } from 'react'

interface MultiStepProps extends StepperProps {
  steps: number
  activeStep: number
}

export function MultiStep({ steps, activeStep }: MultiStepProps) {
  return <Stepper component={MultiStep} steps={steps} activeStep={activeStep} />
}
