import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input"


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 ">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col border-b">
        <div className="flex justify-between pb-5 items-center border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-700">Update your photo and personal details here.</span>
          </div>

          <div className="flex items-center gap-2 ">
            <button type="button" className="rounded-lg border px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>

            <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white">Save</button>

          </div>

        </div>


        <form id="settings" className="mt-6 flex flex-col gap-5 ">
          <div className="grip  grid-cols-form gap-3">
            <label htmlFor="firstname" className="text-sm font-medium text-zinc-700">
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="firtname" defaultValue="Davi"/>
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl defaultValue="Fagundes"/>
              </Input.InputRoot>

            </div>
            <div></div>
          </div>
        </form>

      </div>
    </>

  )


}
