import { MultiStep, MultiStepProps } from '@ignite-ui/react'

interface StepProps extends MultiStepProps {
  size: number
  currentStep: number
}

export function Step({ size, currentStep }: StepProps) {
  return <MultiStep size={size} currentStep={currentStep} />
}
