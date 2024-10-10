from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)

driver.get("http://localhost:51235/newPackage") 

# Clic en el botón que lleva a la página principal
boton = driver.find_element(By.XPATH, '//a[@href="/"]')
boton.click()

# Esperar a que el elemento "Juegos" esté visible y clickeable
elemento_juegos = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, '//div[contains(text(), "Juegos")]'))
)

# Desplazarse al elemento antes de hacer clic
driver.execute_script("arguments[0].scrollIntoView(true);", elemento_juegos)
time.sleep(0.5)  # Espera un poco para que el elemento esté listo

# Hacer clic en "Juegos"
elemento_juegos.click()

# Esperar un momento para que el menú se colapse
time.sleep(1)  # Ajusta el tiempo según sea necesario

# Esperar a que el elemento "Operaciones matemáticas" esté visible y clickeable
elemento_operaciones = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, '//td[contains(@class, "x-grid-cell") and contains(., "Operaciones matemáticas")]'))
)

# Desplazarse al elemento antes de hacer clic
driver.execute_script("arguments[0].scrollIntoView(true);", elemento_operaciones)
time.sleep(0.5)  # Espera un poco para que el elemento esté listo

# Hacer clic en "Operaciones matemáticas"
elemento_operaciones.click()

# Esperar un momento para observar el resultado del clic
time.sleep(1)  # Ajusta el tiempo según sea necesario

# Esperar a que el contenedor que envuelve el checkbox esté visible
checkbox_container = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.ID, 'eRMQFractionsDiv'))
)

# Ahora que el contenedor es visible, puedes intentar acceder al checkbox
checkbox = checkbox_container.find_element(By.ID, 'eRMQFractions')

# Desplazarse al checkbox antes de hacer clic
driver.execute_script("arguments[0].scrollIntoView(true);", checkbox)
time.sleep(0.5)  # Espera un poco para que el elemento esté listo

# Hacer clic en el checkbox
checkbox.click()


# Opcional: Esperar un momento para observar el cambio
time.sleep(1)  # Ajusta el tiempo según sea necesario

input("Presiona Enter para cerrar el navegador...")
driver.quit()
