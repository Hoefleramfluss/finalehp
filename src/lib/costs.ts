export const roiDefaults = {
  callsPerDay: 15,
  avgMinutesPerCall: 3,
  workDaysPerMonth: 22,
  conversionRate: 0.35,
  valuePerAppointment: 120,
  costPerMinuteTwilio: 0.02,
  costPerMinuteSTT_TTS: 0.012,
  hostingFixedPerMonth: 45,
  subscriptionFee: 249,
};

export type RoiInputs = typeof roiDefaults;

export function computeROI(inputs: RoiInputs = roiDefaults) {
  const monthlyMinutes =
    inputs.callsPerDay * inputs.avgMinutesPerCall * inputs.workDaysPerMonth;

  const variableCosts =
    monthlyMinutes * (inputs.costPerMinuteTwilio + inputs.costPerMinuteSTT_TTS);

  const totalCosts =
    variableCosts + inputs.hostingFixedPerMonth + inputs.subscriptionFee;

  const incrementalRevenue =
    inputs.callsPerDay *
    inputs.workDaysPerMonth *
    inputs.conversionRate *
    inputs.valuePerAppointment;

  const profit = incrementalRevenue - totalCosts;
  const roiPct = totalCosts > 0 ? (profit / totalCosts) * 100 : 0;
  const paybackMonths = profit > 0 ? totalCosts / profit : Infinity;

  return {
    monthlyMinutes,
    variableCosts,
    totalCosts,
    incrementalRevenue,
    profit,
    roiPct,
    paybackMonths,
  } as const;
}
