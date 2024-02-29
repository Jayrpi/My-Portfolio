import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423147276_1128923545223136_953895089693547093_n.png?stp=dst-png_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEt6EYgtcF72hGBrHeHj6VnuNfY1LfYGEC419jUt9gYQFoHFW0C0lbxlFiLQlZA-UZcAsXYJGLJGQPsnE4pcKn3&_nc_ohc=Dnb3HvGtq58AX9mMoXC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRhNjPW53DrVLPfyUGVcN-fFbo0_UCzRpnBKEQfX67vuw&oe=6607C602" alt="" />
            <p>An Application For Tracking And Planning Your Menstrual Cycle</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423221584_695136849464027_8496325501786909513_n.png?stp=dst-png_p296x100&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHYHMdYmtBtYpJy0VGUF0PBHyw2z24TDc4fLDbPbhMNzi3sqdz54eliBw0FVAi4mTxkOOxDTWpgewVzBlt_3KIc&_nc_ohc=v0zz2YI6nI0AX--hQJK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT3bnmXGzce2z-QE4NabvuHHvtuG_K50CGdPhZJJn2EXg&oe=6607CB5F" alt="" />
            <p>Certification</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423454796_1406230343434951_5213986350041978827_n.png?stp=dst-png_s280x280&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_eui2=AeF9hwZTzXN6P4Sl9LPUjZUbIfD0YmRdwuMh8PRiZF3C4x8-wkjVho-e67auEqugWkqhpbuhlsiw36QtkiT5RxUq&_nc_ohc=YLrUJ3GV1lwAX8YhwcN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTH_bkJpwDgryUCAegbenZTn4s5Dk688MT4NTDF5zlvkg&oe=6607B021" alt="" />
            <p>Certification</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio