import Flavors from '@/components/flavors'

export default function OrderFlavors({title, langId, options, cakeFlavor, setCakeFlavor, cakeFlavorCategory, setCakeFlavorCategory, filling, setFilling, fillingCategory, setFillingCategory, frosting, frostingCategory, setFrosting, setFrostingCategory, changeStatus, initialFlavorStatus = null, isEditing}) {

  return (
    <Flavors
      title={title}
      langId={langId}
      options={options}
      cakeFlavor={cakeFlavor}
      setCakeFlavor={setCakeFlavor}
      cakeFlavorCategory={cakeFlavorCategory}
      setCakeFlavorCategory={setCakeFlavorCategory}
      filling={filling}
      setFilling={setFilling}
      fillingCategory={fillingCategory}
      setFillingCategory={setFillingCategory}
      frosting={frosting}
      frostingCategory={frostingCategory}
      setFrosting={setFrosting}
      setFrostingCategory={setFrostingCategory}
      changeStatus={changeStatus}
      initialFlavorStatus={initialFlavorStatus}
      isEditing={isEditing}
    />
  )
}