import { getUserOnboardingStatus } from '@/actions/user'
import { industries } from '@/data/industries'
import { redirect } from "next/navigation";
import OnboardingForm from './_component/onboarding-form'
import React from 'react'

const OnboardingPage = async() => {
    //CHECK IF USER IS ALREAD ONBOARDED
    const {isOnboarded}=  await getUserOnboardingStatus();
    if (isOnboarded) {
        redirect("/dashboard");
    }
  return (
    <main><OnboardingForm industries= {industries} /></main>
  )
}

export default OnboardingPage